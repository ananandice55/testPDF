const PDFDocument = require('pdfkit');
const fs = require('fs')
var wordcut = require("wordcut");

// Create a document
const doc = new PDFDocument({layout: 'portrait',
  size: [595, 841], // A4=8.27x11.69, conver to point by x72
  margins: {
    top: 50,
    bottom: 8,
    left: 72,
    right: 40
  }})

var fontSize = 16
var day = '10'
var month = 'กุมภาพันธ์'
var years = '2562'
var name = 'ภญ.ดร.เนตรชนก เจียงสืบชาติวีระ'
var position = 'อาจารย์'
var department = 'สำนักงานการศึกษา'
var tel = '0894561230'
var number1 = '๘๑๐๘.๑/'
var number2 = '๘๑๐๘.๒/'
var people = '1.นายอนันต์ ไข่ทา 0984512311 2.นายอานนท์ สุขเจริญยิ่ง 3.นางสาวแสนดีศรีสุข ยิ่งยศ 4.นายอมรเทพ เทพารักษ์ 5.นายสมชาย ทองหล่อ'
var governor = "นิเทศฝึกปฏิบัติวิชาชีพเภสัชกรรม"
var placeToGo = "โรงพยาบาลน่าน (ไปส่งที่สนามบินดอนเมือง)"
var pickUp = "หน้าคณะเภสัชศาสตร์ ม.บูรพา" 
var day2 = '11'
var month2 = 'กุมภาพันธ์'
var years2 = '2562'
var time2 = "8.00"
var day3 = '11'
var month3 = 'กุมภาพันธ์'
var years3 = '2562'
var time3 = "13.00"
var nameGO = "ภญ.ดร.เนตรชนก เจียงสืบชาติวีระ"
var telGo = "0865212356"
var nameGO2 = "ภญ.ดร.เนตรชนก เจียงสืบชาติวีระ"
var amount = "1"
var nameGO3 = "ภญ.ดร.อนันต์ ไข่ทา"
var pickUp2 = "หน้าคณะวิทยาศาสตร์ ม.บูรพา"
var placeToGo2 = "ชายหาดบางแสน"
var amount2 = "2"
var test = "คำถามพื้นฐานของการตัดแนวคำภาษาไทยคืออะไรคือคำกำหนดขอบเขตอย่างไรเรามักคิดว่าปัญหาเรื่องตัดคำทำให้ประมวลผลภาษาไทยยากไม่เหมือนภาษาอังกฤษที่เขียนแยกเป็นคำ"
doc.pipe(fs.createWriteStream('output.pdf'));

doc.image('img/buu_tb.jpg',70,10, { fit: [46, 46], continued: true })
doc.fontSize(28).font('fonts/THSarabunBold.ttf').text('บันทึกข้อความ', 70, 15, {
  align: 'center'
})
doc.moveDown(0.3)

doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('ส่วนงาน  ', { continued: true })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('สำนักงานการศึกษา  คณะเภสัชศาสตร์  โทร. ๕๐๒๒')
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('ที่  ', { continued: true })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('อว ', { continued: true })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(`${number2}`, { continued: true })
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('วันที่................เดือน...............................พ.ศ....................', {align: 'right'})
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('เรื่อง   ', { continued: true })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ขออนุญาตใช้รถยนต์คณะเภสัชศาสตร์ไปราชการ')
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('เรียน   ', { continued: true })
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('คณบดีคณะเภสัชศาสตร์')
doc.moveDown()
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ด้วยข้าพเจ้า......................................................................', { continued: true, indent: 75 })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ตำแหน่ง.......................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('สังกัด..........................................................................', { continued: true })
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เบอร์โทรศัพท์.................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('พร้อมด้วย................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('โดยขออนุญาตใช้รถตู้คณะเภสัชศาสตร์ หมายเลขทะเบียน นง ๗๖๑ ชลบุรี เพื่อไปราชการ..................................................................................................................................................................................................................................................................................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ณ (โปรดระบุสถานที่ให้ชัดเจน หากมีแผนที่กรุณาแนบมาด้วย)..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('โดยให้รถยนต์ไปรับที่...............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ออกเดินทาง      ในวันที่....................เดือน.............................................พ.ศ............................เวลา............................น.')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('และเดินทางกลับ ในวันที่...................เดือน.............................................พ.ศ..............................เวลา...........................น.')
doc.moveDown()
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จึงเรียนมาเพื่อโปรดพิจารณาอนุญาต จะเป็นพระคุณยิ่ง',{indent: 75})
doc.moveDown()
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ลงชื่อ........................................................ผู้ขอใช้รถ',{indent: 275})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(........................................................)',{indent: 295})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ตำแหน่ง..................................................... ',{indent: 275})
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('การดำเนินการ', { underline:true })
doc.lineCap('butt')
  .moveTo(395, 573)
  .lineTo(395, 775)
  .lineWidth(0.3)
  .stroke()

row(doc, 90);
row2(doc, 110);

function textInRowFirst(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 30;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}


function row(doc, heigth) {
  doc.lineJoin('miter')
    .rect(70, 573, 495, 20)
    .lineWidth(0.3)
    .stroke()
  return doc
}
function row2(doc, heigth) {
  doc.lineJoin('miter')
    .rect(70, 573 , 495, 202)
    .lineWidth(0.3)
    .stroke()
  return doc
}
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('เจ้าหน้าที่ / ผู้บริหาร', 200, 573)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text('คณบดี', 460, 573)
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text('a ', 75,598, {continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เห็นควรอนุญาตในการขอใช้รถในครั้งนี้', 75,595)
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text('a ', {continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ไม่สามารถจัดรถคณะฯให้ได้เนื่องจาก...........................................................', 75,610,)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('..........................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('..........................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ควร ', {continued: true})
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text('a ', 76,670, {continued:true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('............................................................................................................', 75,668)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('หรือ ', {continued: true})
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text('a ', 75,690, {continued:true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จัดจ้างรถสาธารณะอื่นๆ', 75,687)
doc.moveDown(0.8)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ลงชื่อ....................................... ลงชื่อ...............................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(น.ส. เบ็ญจพร    สีสัน)       ',{indent: 25,continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(ภก. ผศ. ดร.ณัฐธัญ  เจริญศรีวิไลวัฒน์)')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('นักวิชาการเงินและบัญชี  ',{indent: 15,continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ผู้ช่วยคณบดีฝ่ายบริหารและวางแผนพัฒนา')
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text(' a  ', 395,598, {continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เห็นควรอนุญาต และสั่งการให้', 395,595,)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' นายทรงวุฒิ  สุมาลี  พนักงานขับรถ')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' คณะฯ ปฏิบัติหน้าที่ตามวันและ')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' เวลาข้างต้น')
doc.fontSize(fontSize).font('fonts/Acta Symbols W95 Circles.ttf').text(' a  ', {continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ไม่อนุญาต................................', 395,663,)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' ........................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' ........................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text(' ลงชื่อ ..............................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(ภญ. รศ. ดร.มยุรี   ตันติสิระ)',{indent: 20})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('คณบดีคณะเภสัชศาสตร์',{indent: 30})
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${day}`, 355, 76)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month}`, 420, 76)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years}`, 515, 76)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${name}`, 200, 152)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${position}`, 430, 152)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${department}`, 130, 170)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${tel}`, 380, 170)
wordcut.init();
//var word = wordcut.cut(people);
var word = wordcut.cut(test)
word = word.replace('|','\u200B')
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${word}`, 120, 188)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${governor}`, 75, 261)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${placeToGo}`, 75, 315)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${pickUp}`, 165, 351)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${day2}`, 190, 405)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month2}`, 270, 405)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years2}`, 400, 405)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${time2}`, 490, 405)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${day3}`, 190, 424)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month3}`, 270, 424)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years3}`, 400, 424)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${time3}`, 490, 424)
doc.addPage({
  layout: 'portrait',
  size: [595, 841], 
  margins: {
    top: 50,
    bottom: 8,
    left: 72,
    right: 40
  }})
doc.image('img/buu_tb.jpg',280,10, { fit: [50, 50]})
doc.moveDown(0.5)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('คณะเภสัชศาสตร์ มหาวิทยาลัยบูรพา',{align : 'center'})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('รายงานแจ้งพนักงานขับรถเพื่อทราบรายงานในแต่ละวัน',{align : 'center'})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ประจำวันที่..................เดือน....................................พ.ศ......................',{align : 'center'})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('..........................................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เรื่อง  ขับรถยนต์ไปราชการ')
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ถึง    นายทรงวุฒิ สุมาลี')
doc.moveDown()
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ด้วยคณะเภสัชศาสตร์ มหาวิทยาลัยบูรพา ได้อนุมัติให้ผู้บริหาร คณาจารย์ และบุคลากร',{indent: 70})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(นาย/นาง/นางสาว)......................................................................',{continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เบอร์โทรศัพท์..............................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ไปปฏิบัติงาน ในวันที่.........เดือน................................. พ.ศ............. ',{continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จึงให้พนักงานขับรถไปเพื่อปฏิบัติงาน.....................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('...................................................................................................................................................................................................................................................................... ',{continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เวลา................................... น.  ตามสถานที่ดังต่อไปนี้')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('๑. ...................................................................................................................... ',{indent: 37,continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จำนวน...............................คน')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('รับที่ .................................................................................................................................................................. ',{indent: 37})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เพื่อไปราชการที่ ............................................................................................................................................... ',{indent: 37})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('๒. ...................................................................................................................... ',{indent: 37,continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จำนวน...............................คน')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('รับที่ .................................................................................................................................................................. ',{indent: 37})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เพื่อไปราชการที่ ............................................................................................................................................... ',{indent: 37})
doc.moveDown(2)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(เภสัชกรหญิง รองศาสตราจารย์ ดร.มยุรี ตันติสิระ)',{indent: 180})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('คณะบดีคณะเภสัชศาสตร์',{indent: 235})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('...............................................................................................................................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เรื่อง รายงานผลการปฏิบัติงาน')
doc.moveDown(0.1)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('เรียน คณบดีคณะเภสัชศาสตร์')
doc.moveDown()
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ตามที่คณะเภสัชศาสตร์ มหาวิทยาลัยบูรพา อนุมัติให้ข้าพเจ้า.....................................................',{indent: 70})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('พนักงานขับรถยนต์ หมายเลขทะเบียน นง ๗๖๑ ชลบุรี ไปราชการ ณ ................................................................')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('...................................................โดยออกเดินทางเวลา...................................น. ',{continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('ผู้ร่วมเดินทางจำนวน............คน')
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('หมายเลขกิโลเมตรก่อนออกเดินทาง..................................',{continued: true})
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('หมายเลขกิโลเมตรหลังเดินทาง...................................')
doc.lineJoin('miter')
   .rect(110, 607, 35, 20)
   .lineWidth(0.3)
   .stroke();
doc.moveDown(0.2)
doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('การปฏิบัติงานครั้งนี้เป็นไปด้วยความเรียบร้อย',{indent: 125})
doc.lineJoin('miter')
   .rect(110, 630, 35, 20)
   .lineWidth(0.3)
   .stroke();
doc.moveDown(0.2)
   doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('อื่น ๆ .......................................................................................................................',{indent: 125})
   doc.moveDown(0.3)
   doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('โดยกลับถึงมหาวิทยาลัยบูรพา เวลา ......................น. และข้าพเจ้าได้ทำความสะอาดรถยนต์เป็นที่เรียบร้อยแล้ว')
   doc.moveDown()
   doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('จึงเรียนมาเพื่อทราบ',{indent: 70})
   doc.moveDown(2)
   doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('(นายทรงวุฒิ สุมาลี)',{indent: 300})
   doc.fontSize(fontSize).font('fonts/THSarabun.ttf').text('พนักงานขับรถ',{indent: 310})
   doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${day}`, 235, 94)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month}`, 305, 94)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years}`, 410, 94)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years}`, 410, 94)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${nameGO}`, 160, 204)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${telGo}`, 420, 204)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${day2}`, 165, 222)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month2}`, 215, 222)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years2}`, 315, 222)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${governor}`, 75, 240)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${time2}`, 320, 258)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${nameGO2}`, 150, 276)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${amount}`, 490, 276)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${pickUp}`, 140, 295)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${placeToGo}`, 190, 313)

//ไปสองที่
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${nameGO3}`, 150, 331)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${amount2}`, 490, 331)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${pickUp2}`, 140, 349)
doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${placeToGo2}`, 190, 367)
//doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${month}`, 15, 66, { continued: true })
// doc.fontSize(fontSize).font('fonts/THSarabunBold.ttf').text(`${years}`, 87, 86)
   //√
doc.end();