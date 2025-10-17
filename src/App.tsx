import NavBar from "./components/NavBar";
import TeamSection from "./components/TeamSection";
import ProposalSection from "./components/ProposalSection";
import DataVizSection from "./components/DataVizSection";

export default function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: 80 }}>
        <TeamSection />
        <ProposalSection />
        <DataVizSection />
      </div>
      <div style={{ textAlign: "center", background: "#f0f0f0", padding: 24 }}>
        © 2025 ZeroWaste+ 团队 ｜ 人机交互实验项目
      </div>
    </>
  );
}
