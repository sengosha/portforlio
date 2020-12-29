import React from 'react';
import { useRouter } from 'next/router';

// const PortfolioDetail = () => {
//   const router = new useRouter();
//   // same with const id = router.query.id;
//   const { id } = router.query;

//   return (
//     <h1>I am detail page widh ID: { id }</h1>
//   )
// }

const PortfolioDetail = ({query}) => {
  const { id } = query;

  return (
    <h1>I am detail page widh ID: { id }</h1>
  )
}

PortfolioDetail.getInitialProps = ({query}) => {
  return {query};
}


// class PortfolioDetail extends React.Component {
//   // Called on the server
//   static getInitialProps({query}) {
//     // what you return here will get into this.props
//     return {query, test: "Hello world", num: 100+200 };
//   }
//   render() {
//     const id = this.props.query.id;
//     return (
//       <h1>I am detail page widh ID: { id } {this.props.test} {this.props.num}</h1>
//     )
//   }
// }

export default PortfolioDetail;
