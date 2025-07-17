import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card />
        <Card />
        <Card />
      </div>
      
      <h2 className="text-lg font-semibold mb-4">Button Components</h2>
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-md font-medium">Small</h3>
            <Button title="Button" styles="rounded-sm text-sm py-1 px-2 bg-red-500" />
            <Button title="Button" styles="rounded-md text-sm py-1 px-2 bg-red-500" />
            <Button title="Button" styles="rounded-lg text-sm py-1 px-2 bg-red-500" />
            <Button title="Button" styles="rounded-full text-sm py-1 px-2 bg-red-500" />
        </div>
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-md font-medium">Medium</h3>
            <Button title="Button" styles="rounded-sm bg-yellow-500" />
            <Button title="Button" styles="rounded-md bg-yellow-500" />
            <Button title="Button" styles="rounded-lg bg-yellow-500" />
            <Button title="Button" styles="rounded-full bg-yellow-500" />
        </div>
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-md font-medium">Large</h3>
            <Button title="Button" styles="rounded-sm text-lg py-3 px-6 bg-green-500" />
            <Button title="Button" styles="rounded-md text-lg py-3 px-6 bg-green-500" />
            <Button title="Button" styles="rounded-lg text-lg py-3 px-6 bg-green-500" />
            <Button title="Button" styles="rounded-full text-lg py-3 px-6 bg-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
