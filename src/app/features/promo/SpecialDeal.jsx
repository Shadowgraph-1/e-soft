import { Clock } from "lucide-react";

function SpecialDeal() {
  return (
    <div className="rounded-md bg-linear-to-br from-red-700 to-rose-500/80 px-4 py-3 text-sm">
      <div className="font-semibold text-white flex gap-2">
        <Clock size={20} />
        Special Deal
      </div>
      <span className="flex text-white text-left w-[150px] pt-2">
        Register now to unlock exclusive offers and discounts
      </span>
      <div className="mt-1 tabular-nums text-white pt-2">
        Offer expires in: <span className="font-bold">0:59:59</span>
      </div>
    </div>
  );
}

export default SpecialDeal;
