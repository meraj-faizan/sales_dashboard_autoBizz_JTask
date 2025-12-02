import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
const DashboardPage = () => {
  return (
    <>
      <Breadcrumbs
        manual={[
          { label: "Dashboard", href: "/" },
          { label: "Home", href: "/" },
        ]}
      />
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
    </>
  );
};

export default DashboardPage;
