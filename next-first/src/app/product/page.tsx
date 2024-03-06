import Parent from "@/components/parent";
import Test from "@/components/test";

export default function Product() {
  return (
    <div>
      <h1> Product </h1>
      <div></div>
      <Parent className="bg-blue-500">
        <Test></Test>
      </Parent>
    </div>
  );
}
