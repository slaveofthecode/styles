const $divTxt = document.querySelector(".section-search");
const $txt = $divTxt.querySelector('[type="text"]');
const $btn = $divTxt.querySelector("button");

$btn.addEventListener("click", moveTop);
$txt.addEventListener("keyup", resetMoveTop);
$txt.addEventListener("keypress", clickEnter);

function clickEnter(e) {
	var key = e.which || e.keyCode;
	// 13 is enter
	key === 13 && moveTop();
}

function moveTop(e) {
	if ($txt.value.trim().length > 0) {
		$divTxt.classList.add("section-search-moveTop");
		$divTxt.classList.remove("section-search-resetMoveTop");
	}
}

function resetMoveTop(e) {
	if (e.target.value.trim().length == 0) {
		$divTxt.classList.add("section-search-resetMoveTop");
		$divTxt.classList.remove("section-search-moveTop");
	}
}
