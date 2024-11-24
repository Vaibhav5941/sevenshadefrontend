import { serverURL } from "../../services/FetchDjangoApiServices"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function SubcategoryComponent3(props) {


    const theme = useTheme();
    const md_matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));


    var socialitems = [{ id: '13', icon: '13.png' },
    { id: '14', icon: '14.png' },
    { id: '15', icon: '15.png' },]

    var payitems = [{ id: '16', icon: '16.png' },
    { id: '17', icon: '17.png' },
    { id: '18', icon: '18.png' },
    { id: '19', icon: '19.png' },
    { id: '20', icon: '20.png' }]

    const showAllSocialItems = () => {
        return socialitems.map((item) => {
            return  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,margin: sm_matches ? 2 : 3}}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', width:sm_matches ? 22 : 50, height: sm_matches ? 22 : 50, marginBottom: 1, backgroundColor: '#f2f2f2', margin: 5 }}>
                    <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        })
    }
    const showAllPayItems = () => {
        return payitems.map((item) => {
            return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,margin: sm_matches ? 2 : 5,}}>
                <div style={{ width: sm_matches ? 16 : 45, height: sm_matches ? 17 : 45, marginBottom: 1, backgroundColor: '#f2f2f2',}}>
                    <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        })
    }
    return (
    <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', height: 30, justifyContent: sm_matches ? 'center' : 'space-between', }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',flexWrap: sm_matches ? 'wrap' : 'nowrap', }}>
                    {showAllSocialItems()}
                </div>
                <div style={{ borderLeft: '1px solid black', height: 20,  margin: sm_matches ? 2 : 5, alignItems: 'center' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',flexWrap: sm_matches ? 'wrap' : 'nowrap',}}>
                    {showAllPayItems()}
                </div>
            </div>
            <div style={{ borderTop: '1px solid #ececec', height: 20, margin: sm_matches ? 5 : 10}}></div>
        </div>
    </div>
    )
}