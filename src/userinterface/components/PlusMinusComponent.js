import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function PlusMinusComponent(props) {

    const theme = useTheme();
    const md_matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = useState(0)
    useEffect(function () {
        setValue(props.value)
    }, [props.value])
    const handlePlus = () => {
        var v = value
        v = v + 1
        setValue(v)
        props.onChange(v)
    }
    const handleMinus = () => {
        var v = value
        if (v >= 1) {
            v = v - 1
            setValue(v)
        }
        props.onChange(v)
    }

    return (
        <div>
            {value == 0 ? <div><Button variant="contained" style={{ fontSize:sm_matches?'1.5vh':md_matches?"1.5vw": '1.2vw', width:md_matches?'30vw': '20vw', background: '#000', color: '#fff' }} onClick={handlePlus}>Add to Bag</Button></div> : <div style={{ width:sm_matches?'15vw': '10vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><Button variant="contained" style={{ fontSize:sm_matches?'2vh': '1.2vw', width:sm_matches?'1vw': '1.5vw', background: '#000', color: '#fff' }} onClick={handlePlus}>+</Button><span style={{ fontSize:sm_matches?'3vw': '1.2vw', fontWeight: 'bolder', width:sm_matches?'5vw': '1.5vw', textAlign: 'center' }}>{value}</span><Button variant="contained" style={{ fontSize:sm_matches?'2vh': '1.2vw', width:sm_matches?'1vw': '1.5vw', background: '#000', color: '#fff' }} onClick={handleMinus}>-</Button></div>}
        </div>

    )
}