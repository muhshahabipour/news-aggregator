import TextInput from "@/components/Form/TextInput";

const Search = () => {
  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div className="flex items-stretch w-full">
        <div className="w-full xl:max-w-screen-sm mx-auto space-y-3">
            <TextInput placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Search;
