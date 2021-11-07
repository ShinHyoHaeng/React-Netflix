import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import YoutubeEmbed from '../../YoutubeEmbed'

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <YoutubeEmbed embedId="1bq0qff4iF8" className="video"/>
        </div>
    )
}
