import React, { useState } from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

// ✅ Tab 列表
const tabList = [
  {
    key: "userPicture",
    tab: "受访者画像雷达图",
  },
  {
    key: "shoppingHabit",
    tab: "食材采购频率分布",
  },
  {
    key: "foodWaste",
    tab: "食物浪费情况与原因",
  },
  {
    key: "preferBar",
    tab: "功能偏好打分",
  },
  {
    key: "otherAdvices",
    tab: "开放题建议与词云",
  },
];

// ✅ 各 Tab 对应内容
const contentList: Record<string, React.ReactNode> = {
  userPicture: (
    <iframe
    src={`${import.meta.env.BASE_URL}userPicture.html`}
      title="受访者画像雷达图"
      width="100%"
      height="550"
      style={{ border: "none", borderRadius: 12 }}
    />
  ),
  shoppingHabit: (
    <iframe
      src={`${import.meta.env.BASE_URL}shoppingHabit.html`}
      title="食材采购频率分布"
      width="100%"
      height="550"
      style={{ border: "none", borderRadius: 12 }}
    />
  ),
  foodWaste: (
    <iframe
      src={`${import.meta.env.BASE_URL}foodWaste.html`}
      title="食物浪费情况与原因"
      width="100%"
      height="550"
      style={{ border: "none", borderRadius: 12 }}
    />
  ),
  preferBar: (
    <iframe
      src={`${import.meta.env.BASE_URL}preferBar.html`}
      title="功能偏好打分"
      width="100%"
      height="550"
      style={{ border: "none", borderRadius: 12 }}
    />
  ),
  otherAdvices: (
    <iframe
      src={`${import.meta.env.BASE_URL}otherAdvices.html`}
      title="开放题建议与词云"
      width="100%"
      height="550"
      style={{ border: "none", borderRadius: 12 }}
    />
  ),
};

const DataDisplaySection: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("userPicture");

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <div
      id="data"
      style={{
        backgroundColor: "#f6ffed",
        padding: "100px 0 120px",
      }}
    >
      <div className="page" style={{ textAlign: "center" }}>
        <Title
          level={2}
          style={{
            color: "#237804",
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          数据分析与可视化展示
        </Title>

        <Card
          style={{
            borderRadius: 16,
            boxShadow:
              "0 6px 16px rgba(82, 196, 26, 0.15), 0 0 0 1px rgba(82, 196, 26, 0.1)",
          }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
          tabProps={{
            size: "large",
          }}
          headStyle={{
            fontWeight: 600,
            fontSize: 18,
          }}
          bodyStyle={{
            padding: 0,
          }}
        >
          {contentList[activeTabKey]}
        </Card>
      </div>
    </div>
  );
};

export default DataDisplaySection;
