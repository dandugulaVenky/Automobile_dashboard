import { Typography } from "antd";

function AppFooter (){
    return <div className="AppFooter" >
        <Typography.Link href="tel:+125554755858" >+125554755858</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy policy</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"} >Terms of Use</Typography.Link>

    </div>
}

export default AppFooter;