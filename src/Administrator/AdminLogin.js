import React, { useState } from 'react';
import { Footer, Header } from '../PageParts';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function AdminLogin() {
    const [command, setCommand] = useState('');
    const adminCommand = 'IamKameKingdom';
    const { displayName } = auth.currentUser || {};
    const now = new Date();
    const nowTime = `${now.getHours()}時${now.getMinutes()}分`;

    const handleCommand = (e) => setCommand(e.target.value);
    const lowerCommand = command.toLowerCase();

    const links = {
        reserve: { path: '/reservation', label: '部室予約' },
        reservation: { path: '/reservation', label: '部室予約' },
        calendar: { path: '/calendar', label: 'カレンダー' },
        event: { path: '/notification', label: 'イベント' },
        home: { path: '/', label: 'ホーム' },
        tool: { path: '/tool', label: 'ツール' },
        youtube: {
            path: 'https://www.youtube.com/channel/UCg9WNSATUeU8g5p2O4mHS_w',
            label: 'YouTube',
            external: true,
        },
        instagram: {
            path: 'https://www.instagram.com/deepstreamksc/',
            label: 'Instagram',
            external: true,
        },
        twitter: {
            path: 'https://www.instagram.com/deepstreamksc/',
            label: 'Instagram',
            external: true,
            error: 'あ、間違えちゃった...',
        },
    };

    const messages = {
        game: '現在開発中...お楽しみに',
        hello: `こんにちは。${displayName}さん`,
        'good morning': `おはようござんす${displayName}さん`,
        'good evening': `こんばんは。${displayName}さん`,
        'good night': `おやすみなさい${displayName}さん`,
        time: `現在時刻は${nowTime}です`,
        kame: 'こんにちは、かめです🐢',
        cmd: '遊び心で作ってみました🐢',
        command: '遊び心で作ってみました🐢',
    };

    const renderLink = (link) =>
        link.external ? (
            <a href={link.path} className="kame_button_light_blue">
                <p className="kame_font_002">{link.label}</p>
            </a>
        ) : (
            <Link to={link.path} className="kame_button_light_blue">
                <p className="kame_font_002">{link.label}</p>
            </Link>
        );

    return (
        <div>
            <Header />
            <br /><br />
            {/* <p className="kame_font_003">コマンド</p> */}
            <center>
                <textarea
                    type="text"
                    className="kame_textarea_small"
                    onChange={handleCommand}
                    value={command}
                    placeholder=""
                />
            </center>
            <br /><br />

            {command === adminCommand && renderLink({ path: '/adminhome', label: '管理者画面' })}

            {messages[lowerCommand] && <p className="kame_font_003">{messages[lowerCommand]}</p>}

            {links[lowerCommand] && (
                <>
                    {renderLink(links[lowerCommand])}
                    {links[lowerCommand].error && <p className="kame_font_003">{links[lowerCommand].error}</p>}
                </>
            )}

            <Footer />
        </div>
    );
}

export default AdminLogin;
