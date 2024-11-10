import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

type SearchParams = Promise<{ title?: string }>;

interface SearchProps {
  searchParams: SearchParams;
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const { title } = await searchParams; // Await searchParams to destructure title
  const songs = await getSongsByTitle(title || ""); // Fallback to an empty string if title is undefined

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
