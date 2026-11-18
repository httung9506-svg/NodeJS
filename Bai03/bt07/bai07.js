
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (!name || !name.trim()) {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số name');
        } else {
            res.end(`Xin chào ${name}`);
        }

    } else if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null || a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số a hoặc b');
        } else if (!Number.isFinite(Number(a)) || !Number.isFinite(Number(b))) {
            res.statusCode = 400;
            res.end('Lỗi: Giá trị a hoặc b không hợp lệ');
        } else {
            const sum = Number(a) + Number(b);
            res.end(`Tổng = ${sum}`);
        }

    } else {
        res.statusCode = 404;
        res.end('Không tìm thấy đường dẫn');
    }
});

server.listen(3001, () => {
    console.log('Server đang chạy tại http://localhost:3001');
});
