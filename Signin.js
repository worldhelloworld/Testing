import React, { useState } from 'react'

function Signin(props) {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
            >
                <label>Pinterest SignIn</label>
                <label>Email</label>
                <label>비밀번호</label>
                <br />
                <button type="submit">
                    가입
                </button>
            </form>
        </div>
    )
}

export default Signin