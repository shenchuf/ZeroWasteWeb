import { Layout, Menu, Row, Col, Typography } from "antd";
import { Link } from "react-scroll";

const { Header } = Layout;
const { Title } = Typography;

export default function NavBar() {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div className="page" style={{ display: "flex", alignItems: "center" }}>
        <Title level={3} style={{ margin: 0, color: "#7cb305", fontWeight: 700 }}>
          ZeroWaste+
        </Title>

        {/* 占满剩余空间，再把菜单内容往右靠 */}
        <div style={{ marginLeft: "auto" }}>
          <Menu
            mode="horizontal"
            selectable={false}
            style={{ borderBottom: "none" }}
            items={[
              {
                key: "team",
                label: (
                  <Link to="team" smooth duration={400} offset={-80}>
                    团队介绍
                  </Link>
                ),
              },
              {
                key: "proposal",
                label: (
                  <Link to="proposal" smooth duration={400} offset={-80}>
                    项目提案
                  </Link>
                ),
              },
              {
                key: "data",
                label: (
                  <Link to="data" smooth duration={400} offset={-80}>
                    数据展示
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </div>
    </Header>
  );
}
