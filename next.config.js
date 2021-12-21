module.exports = {
    rewrites: async function () {
        return [
            {
                source: '/avocado/:path*', // wildcards
                destination: '/product/:path*'
            }
        ]
    }
}