import  * as React from "react";
import Header from "&/components/common/header";
import Footer from "&/components/common/footer";

/**
 * 必需！！
 * 应用组件
 * 如果项目中使用了页面对代码进行拆分，需要把页面的代码通过this.props.children来访问页面组件
 */
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header name='hehe' title={3} />
                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
