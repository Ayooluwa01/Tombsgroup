import { Herosection } from "../../components/sections/Herosection";
import { LMS } from "../../components/sections/LMSSection";
import Button from "../../components/ui/Button";
import Text from "../../components/ui/Text";

export default function Home() {
  return (
    <div>
      <Herosection />
      <LMS />
    </div>
  );
}
