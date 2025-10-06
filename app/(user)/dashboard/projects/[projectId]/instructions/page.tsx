import CopyBtn from "@/components/copy-btn"

const page = ({
  params,
}: {
  params: {
    projectId: String;
  };
}) => {
  
  if (!params.projectId) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-5 relative">
        <CopyBtn text={`<my-widget project=${params.projectId}></my-widget>
          <br /><script src="${process.env.WIDGET_URL}"></script>`}/>
        <code className="text-white">
          {`<my-widget project=${params.projectId}></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}"></script>`}
        </code>
      </div>
    </div>
  );
};

export default page;
