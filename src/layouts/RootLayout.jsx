import PropTypes from 'prop-types';
import Sidebar from "./sidebar"

export default function RootLayout({ children }) {
    return (
        <div className="flex gap-1">
        <Sidebar/>
        {/* <main className="max-w-8xl flex-1 mx-auto py-4">{children}</main> */}
        <main className="max-w-8xl flex-1 mx-auto">{children}</main>
    </div>
    )
}

RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
