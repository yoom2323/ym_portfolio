import "../style/componentFooter.scss";

function ComponentFooter() {
  const url = "omgvic@naver.com";
  const copy = (url) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = url;
    $textarea.select();
    document.execCommand("copy");
    document.body.removeChild($textarea);

    alert("복사되었습니다!");
  };
  return (
    <div className="wrapper">
      <p>
        contact me! <b>☞</b>{" "}
        <span
          onClick={() => {
            copy(url);
          }}
        >
          omgvic@naver.com
        </span>
      </p>
      <h1>publisher seolyumi</h1>
    </div>
  );
}

export default ComponentFooter;
