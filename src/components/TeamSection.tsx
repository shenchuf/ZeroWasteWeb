import React from "react";
import { Card,  Typography,  } from "antd";

const { Title, Paragraph } = Typography;

const cardStyle: React.CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
  borderRadius: 20,
  background: "linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)",
  boxShadow: "0 8px 24px rgba(82, 196, 26, 0.15)",
};

const imgStyle: React.CSSProperties = {
  display: "block",
  width: "50%",
  objectFit: "cover",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
};

const textContainer: React.CSSProperties = {
  padding: "40px 48px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const TeamMissionSection: React.FC = () => (
  <div
    id="team"
    style={{
      backgroundColor: "#f6ffed",
      padding: "100px 0",
    }}
  >
    <Card
      hoverable
      style={cardStyle}
      bodyStyle={{
        padding: 0,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* 左侧图片 */}
      <img
        src={`${import.meta.env.BASE_URL}vegetables.jpg`} alt="团队介绍"
        style={imgStyle}
        draggable={false}
      />

      {/* 右侧文字内容 */}
      <div style={textContainer}>
        <Title level={2} style={{ color: "#52c41a", marginBottom: 16 }}>
          ZeroWaste+ 团队介绍
        </Title>
        <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#4b5563" }}>
          我们的使命是以“技术赋能可持续生活”为核心，通过设计思维与用户研究，
          减少家庭食物浪费、提升公众环保意识。
        </Paragraph>
        <Paragraph style={{ fontSize: 15, lineHeight: 1.8, color: "#4b5563" }}>
          本次实验分工：徐子睿负责采访与问卷信息收集；
          王奕沣负责数据处理与可视化；沈楚凡负责网页制作与整体展示。
        </Paragraph>
        
      </div>
    </Card>
  </div>
);

export default TeamMissionSection;
