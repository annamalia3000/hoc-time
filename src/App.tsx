import {useState} from 'react';
import moment from 'moment';

function DateTimePretty(Component: React.FC<{date: string}>) {
  return function DateComponent(props: { date: string }) {
    const formattedDate = moment(props.date).fromNow();
    return <Component {...props} date={formattedDate} />;
  }
}

function DateTime(props: { date: string }) {
    return (
        <p className="date">{props.date}</p>
    )
}

const DateTimePrettyComponent = DateTimePretty(DateTime);

function Video(props: { url: string; date: string }) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePrettyComponent date={props.date} />
        </div>
    )
}


function VideoList(props: { list: Array<{ url: string; date: string }> }) {
    return props.list.map(item => <Video key = {item.date} url={item.url} date={item.date} />);

}
export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}