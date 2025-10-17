import React from "react";
import { Collapse, Typography } from "antd";
import type { CollapseProps } from "antd";

const { Title, Paragraph } = Typography;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <Title
        level={4}
        style={{
          color: "#237804",
          margin: 0,
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        一、项目背景与问题
      </Title>
    ),
    children: (
      <Paragraph
        style={{
          fontSize: 16,
          color: "#333",
          lineHeight: 1.8,
          marginTop: 8,
        }}
      >
        随着社会独居人士增多与工作压力上升，尤其在年轻人群体中，“独居 + 工作时长长”的现象愈加普遍。
        这导致家庭中食材遗忘、浪费，甚至误食过期食物引发健康风险。
        同时，全球存在食物浪费与短缺并存的矛盾：2022 年家庭食物浪费占比高达 60%，
        仍有约 7.83 亿人长期处于饥饿状态。
      </Paragraph>
    ),
  },
  {
    key: "2",
    label: (
      <Title
        level={4}
        style={{
          color: "#237804",
          margin: 0,
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        二、核心功能
      </Title>
    ),
    children: (
      <div
        style={{
          fontSize: 16,
          color: "#333",
          lineHeight: 1.8,
        }}
      >
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: 20,
            margin: 0,
          }}
        >
          <li>
             <strong>即时提醒与记录：</strong> 扫码录入食材信息，自动设定保质期提醒，
            推送临期食材食谱，支持随时盘点。
          </li>
          <li>
             <strong>位置服务：</strong> 推送附近超市临期折扣信息，帮助零售商减损。
          </li>
          <li>
             <strong>设备集成：</strong> 支持摄像头扫码录入，未来计划加入图像识别识别无包装果蔬。
          </li>
          <li>
             <strong>社群互动：</strong> 搭建本地社区分享与捐赠平台，让多余食物流向有需要的人群。
          </li>
        </ul>
      </div>
    ),
  },
];

const ProposalSection: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log("Active panel:", key);
  };

  return (
    <div
      id="proposal"
      style={{
        backgroundColor: "#f6ffed", 
        padding: "100px 0 120px",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "left", 
        }}
      >
        <Title
          level={2}
          style={{
            color: "#237804",
            fontWeight: 700,
            marginBottom: 40,
            textAlign: "center", 
          }}
        >
          项目提案
        </Title>

        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          accordion
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: 16,
            boxShadow: "0 4px 12px rgba(82, 196, 26, 0.15)",
            padding: "16px 24px",
            textAlign: "left", 
          }}
        />

        <Paragraph
          style={{
            marginTop: 60,
            color: "#2b2b2b",
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 850,
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          我们的目标是通过智能化设计减少家庭食物浪费，让科技赋能可持续生活，
          <strong style={{ color: "#389e0d" }}>ZeroWaste+</strong> 团队致力于用数据与创新改善饮食管理方式，
          推动社会向环保、节约与共享的未来迈进。
        </Paragraph>
      </div>
    </div>
  );
};

export default ProposalSection;
