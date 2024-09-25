import { Link } from '@inertiajs/react';


export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'border-b-2 leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-lightPurple focus:text-white focus:bg-lightPurple ') +
                className
            }
        >
            {children}
        </Link>
    );
}
