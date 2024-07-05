import { memo } from "react";
import cls from "./loading.module.scss";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Loading = memo(() => {
  return (
    <div className={cls.wrapper}>
      <Space>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 160, color: "var(--primary-color)" }} spin />} />
      </Space>
    </div>
  );
});