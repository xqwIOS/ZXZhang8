import {Dimensions} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    middleHeight:Dimensions.get('window').height-120,
    btnColor : 'rgb(37,37,49)',
    backColor: 'rgb(235,234,249)'
}
export default {
    window: window,
}