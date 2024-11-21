import EcommerceLayout from "@/Layouts/EcommerceLayout";
import React from "react";

const MyOrder = () => {
    return <div><nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <a
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start"
        href="/examples/forms"
    >
        Profile
    </a>
    <a
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
        href="/examples/forms/account"
    >
        Account
    </a>
    <a
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
        href="/examples/forms/appearance"
    >
        Appearance
    </a>
    <a
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
        href="/examples/forms/notifications"
    >
        Notifications
    </a>
    <a
        class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
        href="/examples/forms/display"
    >
        Display
    </a>
</nav></div>;
};

MyOrder.layout = page => <EcommerceLayout children={page}/>


export default MyOrder;
