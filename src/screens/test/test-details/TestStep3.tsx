import TestFrame from "../TestFrame";
import VideoTestKhop from '../../../../assets/videos/VideoTestKhop.mp4';

export default function TestStep3() {

    return (
        <TestFrame
            title="KIỂM TRA KHỚP"
            img={VideoTestKhop}
            textImg={'Đứng rộng chân, lưng thẳng đứng,\ntay đưa ra sau và đan vào nhau'}
            textYes="Được"
            textNo="Không được"
        />
    )
}