import Button from "../components/ui/Button";

function Footer() {
  return (
    <footer className="mt-auto w-full px-6 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 border-t border-neutral-200 pt-6 sm:flex-row sm:flex-nowrap sm:items-start sm:justify-between">
        <div className="flex max-w-xs flex-col gap-2">
          <span className="font-medium">About</span>
          <p className="text-sm text-neutral-600">
            TechStore offers curated electronics with clear pricing and
            dependable support. We focus on quality brands and a straightforward
            shopping experience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Support</span>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            Shipping
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            Returns
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Legal</span>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
          >
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Newsletter</span>
          <div className="flex flex-wrap gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="min-w-[12rem] rounded-lg border border-neutral-300 bg-neutral-100/50 px-2 py-1 text-sm"
            />
            <Button
              type="button"
              className="cursor-pointer rounded-lg border border-neutral-900 bg-black px-3 py-2 text-sm text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-7xl items-center justify-center border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        <span>© 2026 TechStore. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
