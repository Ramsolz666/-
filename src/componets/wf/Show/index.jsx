import React, { Component } from 'react'
var value;
export default class Show extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center',color:'blue'}}>信用报告</h1>
        <ul>
          {/* 直接在相应后边添加就好 */}
          <li style={{color:'red'}}>本次信用查询的哈希值为：0x4acd07917500f86cbb9407a56c3cf7fdaebdc96eee2839b14faff298aaaf91dd{value}</li>
          <li >年份：2016{value}</li>
          <li >企业名称：广宇集团股份有限公司{value}</li>
          <li >企业统一社会信用代码：91330000143125150B{value}</li>
        </ul>
        <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'15px',}}  >企业外部环境 </span>
        <ul>
          <li>企业所在城市GDP（亿元）11313.72</li>
          <li>国房景气指数 100.78</li>
          <li>企业所在城市商品房销售面积 2326.82（万平方米）</li>
          <li>企业所在城市商品房竣工面积 1922.99（万平方米）</li>
          <li>国家行业政策 反对</li>
          <li>所在城市行业政策 反对</li>
        </ul>
        <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'15px',}}  >企业基本特征 </span>
        <ul>
          <li>员工数量（人）355</li>
          <li>本科以上学历高管人数（人）6</li>
          <li>高管总人数（人）6</li>          
          <li>纳税等级 A</li>

        </ul>
        <span style={{border: '5px solid rgba(140, 140, 140, 0.35)',fontSize:'15px',}}  >企业财务状况 </span>
        <ul>
          <li>营业收入增长率 0.2278</li>
          <li>资产负债率 0.5986</li>
          <li>每股净资产增长率 0.0130</li>
          <li>总资产周转率 0.4664</li>
          <li>净资产收益率 0.1213</li>
          <li>营业利润增长率 0.3678</li>
          <li>应收账款周转率 124.0591</li>
        </ul>
      </div>
    )
  }
}
