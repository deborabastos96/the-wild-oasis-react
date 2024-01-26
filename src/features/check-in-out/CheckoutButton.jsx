import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckoutgIn } = useCheckout();

  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckoutgIn}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
