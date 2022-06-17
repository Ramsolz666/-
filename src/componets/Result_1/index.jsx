import React, { Component } from 'react'
import {Result,Button,Typography, message} from 'antd'
const { Paragraph, Text } = Typography;
export default class Res_1 extends Component {
  render() {
    function yes() {
      message.success('本次资金申请审批已完成，对应数额资金将于6小时后自动转入调用账户，您可以在6小时内撤销复核结果。');
    }
    return (
      <div>
          <Result
            status="success"
            title="上链成功"
            subTitle="公示结果上链成功"
            extra={[
            <Button onClick={yes} type="primary" key="console">
                确认
            </Button>,
            <Button key="buy">返回</Button>,
            ]}
            >
               <div>
                
                <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
          区块哈希值：
          </Text>
          52d133ec1ef8ee33d3710992f611529eda9d5618e2117a85af674c5983f68075</Paragraph>
                <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 16,
                  }}
                >
          数据哈希值：
          </Text>
          2e841d534c25c669b2089c827a99c7fd4d1ad2464d42b8e13da6e3f14d86b28a</Paragraph>
              </div>
            </Result>
      </div>
    )
  }
}
// export default class Res_1 extends Component {
//   render() {
//     return (
//       <div>
//           <Result
//             status="success"
//             title="上链成功"
//             subTitle="初步审核结果上链成功"
//             extra={[
//             <Button type="primary" key="console">
//                 查看详情
//             </Button>,
//             <Button key="buy">返回</Button>,
//             ]}
//             >
//                <div>
                
//                 <Paragraph>
//                 <Text
//                   strong
//                   style={{
//                     fontSize: 16,
//                   }}
//                 >
//           区块哈希值：
//           </Text>
//           a31dbbd32cd31f0618b9d00a5ed8a0cecbed11add6a6c22891bcb90fc1c9a375</Paragraph>
//                 <Paragraph>
//                 <Text
//                   strong
//                   style={{
//                     fontSize: 16,
//                   }}
//                 >
//           数据哈希值：
//           </Text>
//           3641ee6d5b5c410d528d882df7cbe058f80dbbf330bea48086fc43459e42c2be</Paragraph>
//               </div>
//             </Result>
//       </div>
//     )
//   }
// }

