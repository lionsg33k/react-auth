import { FirstSectionComponent } from "./components/homeSection"



 export const HomePage = (props) => {


    return (
        <>
            <FirstSectionComponent onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser} profile={props.profile} setProfile={props.setProfile} />
        </>
    )
}

