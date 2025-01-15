import { TransitionText } from "@/components/0-7/TrasitionedText";
import { Link } from "@/i18n/routing";

const Page = async ({ params }: { params: Promise<{ pageId: string }> }) => {
  const { pageId } = await params;
  const nextId = parseInt(pageId, 10) + 1;
  return (
    <Link
      href={nextId === 8 ? "/0-8" : `/0-7/${nextId}`}
      className="flex justify-center items-center relative w-full min-h-screen"
    >
      <TransitionText pageId={pageId} />
    </Link>
  );
};
export default Page;
