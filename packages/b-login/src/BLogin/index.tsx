import React, { FC } from 'react';
import './index.less';

export interface ILogin {
  /**
   * @description       标题
   * @default           登录
   */
  title?: string;
}

const MLogin:  FC<ILogin> = ({ title }: ILogin) => <h1>{title}</h1>;

export default MLogin;
