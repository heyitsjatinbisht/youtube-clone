import "../SidebarRow.css";
interface Props {
  selected?: boolean;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
}
const SidebarRow = ({ Icon, title, selected }: Props) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
