import React from 'react'
import { Footer, Header } from '../PageParts'
import { Link } from 'react-router-dom'
import "../css/kame.css"

function AdminHome() {
  return (
    <>
      <Header />
      <br />
      <p class="kame_font_003">🐢kame Admin🐢</p><br />
      <Link to="/admineventpost" class="kame_button_light_blue"><p class="kame_font_002">提出書類作成</p></Link><br /><br />
      <Link to="/adminschedulepost" class="kame_button_light_blue"><p class="kame_font_002">イベント作成</p></Link><br /><br />
      <Link to="/upload-page" class="kame_button_light_blue"><p class="kame_font_002">Deep Magazine</p></Link><br /><br />
      <Link to="/create-reservation-settings" class="kame_button_light_blue"><p class="kame_font_002">緊急予約</p></Link><br /><br />
      <Link to="/create-reservation-template" class="kame_button_light_blue"><p class="kame_font_002">テンプレ</p></Link><br /><br />
      <a href="https://github.com/DeepStream-KSC/deepstreamksc/" class="kame_button_light_blue"><p class="kame_font_002">ソースコード</p></a><br />
      <Footer />
    </>
  )
}

export default AdminHome