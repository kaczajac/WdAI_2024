import React, { useState } from 'react';

function Logowanie() {
    const [username, setUsername] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleFirstPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(event.target.value);
    };

    const handleSecondPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(event.target.value);
    };

    const handleLoginClick = () => {
        if (firstPassword !== secondPassword) {
        alert('Hasła nie są zgodne');
        } else {
        alert('Zalogowano poprawnie');
        }
    };

    const isButtonDisabled = !username || !firstPassword || !secondPassword;

    return (
        <>
            <div>
                <label>
                Nazwa użytkownika:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                </label>
            </div>
            <div>
                <label>
                Hasło:
                <input
                    type="text"
                    value={firstPassword}
                    onChange={handleFirstPasswordChange}
                />
                </label>
            </div>
            <div>
                <label>
                Powtórz Hasło:
                <input
                    type="text"
                    value={secondPassword}
                    onChange={handleSecondPasswordChange}
                />
                </label>
            </div>

            <div>
                <button
                onClick={handleLoginClick}
                disabled={isButtonDisabled}
                >
                Zaloguj
                </button>
            </div>
        </>
    );
}

export default Logowanie;