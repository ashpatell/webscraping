var request = require('request');
var cheerio = require('cheerio');
var Promise = require('promise');
let i = 0;

for (i = 19800; i > 10000; i--) {

	request('https://mmls.mmu.edu.my/attendance:2:2:' + i, function (err, resp, html) {
		if (!err) {
			const $ = cheerio.load(html);
			setTimeout(function () {}, 100);
			
			let classid = $('.form-signin').children('#class_id').val();
			let timetableid = $('.form-signin').children('#timetable_id').val();

			switch (classid) {
				case '27762':
					console.log("TOM LEC timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '29513':
					console.log("TOM TUT timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '28062':
					console.log("IM LEC timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '28879':
					console.log("IM TUT timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '27440':
					console.log("QE LEC timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '29315':
					console.log("QE TUT timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '28207':
					console.log("GERMAN LEC timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;
				case '28456':
					console.log("FYP LEC timetableid = " + classid, "classid = " + 'https://mmls.mmu.edu.my/attendance:2:2:' + timetableid);
					break;




			}
			setTimeout(function () {}, 100);

		}
	});

}