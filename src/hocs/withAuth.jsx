import { Component } from "react"

const config = {
    routes: {
        public: [
            '/login',
            '/home',
            '/about',
            '/contact',
            '/',
        ],
        private: [
            '/profile',
            '/dashboard',
            '/settings',
        ]
    }
}
const withAuth = (Component) => {
    return Component;
}
export default withAuth;