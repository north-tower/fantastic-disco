'use client';

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, ChatBubbleLeftIcon, HomeIcon, 
    PaperAirplaneIcon, ChevronDownIcon, 
    PhoneIcon, PlayCircleIcon, XMarkIcon} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button"

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import { cn } from "@/lib/utils";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const products = [
        {
            name: "Book a Stay",
            description: "Get a better understanding of your traffic",
            href: "#",
            icon: HomeIcon, 
        },
        {
            name: "Book a flight",
            description: "Speak directly to your customers",
            href: "#",
            icon: PaperAirplaneIcon
        },
        {
            name: "Contact our support team",
            description: "Your customers' data will safe and secure",
            href: "#",
            icon: ChatBubbleLeftIcon
        },
    ];

    const callsToAction = [
        { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
        { name: "Contact Support", href: "#", icon: PhoneIcon }
    ];

    return (
        <header className="bg-black hover:bg-white text-white hover:text-black transition-colors">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-lg">Aeres</span>
            </Link>
        </div>
        <div className="flex p-2  ">
        <Button >Lets Chat</Button>

        </div>
        <div className="flex">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center 
            rounded-md p-2.5 " onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
        </div>
    </nav>

            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
                <Dialog.Panel className="fixed inset-0 z-10 w-full h-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-lg">Aeres</span>
            </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon className="h-6 w- text-gray-600" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure className="-mx-3" as="div">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg 
                                            py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-600 hover:bg-blue-800">
                                                About Us
                                                {/* <ChevronDownIcon className={cn(open ? "rotate-180" : "", 
                                                    "h-5 w-5 flex-none")} aria-hidden="true" /> */}
                                            </Disclosure.Button>
                                            {/* <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button key={item.name} as="a" href={item.href} 
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold 
                                                    leading-7 text-gray-600 hover:bg-blue-800">
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel> */}
                                        </>
                                    )}
                                </Disclosure>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                                 text-gray-600 hover:bg-blue-800">Cases</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                                text-gray-600 hover:bg-blue-800">Services</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                                 text-gray-600 hover:bg-blue-800">Solutions</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                                text-gray-600 hover:bg-blue-800">Clients</a>
                                 <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                                text-gray-600 hover:bg-blue-800">Blog</a>
                                 <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                                text-gray-600 hover:bg-blue-800">Contacts</a>
                            </div>
                            {/* <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-600 hover:bg-blue-800">Log in</a>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default Header;
