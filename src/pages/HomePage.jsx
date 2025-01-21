import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getAllNotes } from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || ""; // Default ke string kosong jika tidak ada keyword

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(), // Mengambil semua catatan
      keyword: props.defaultKeyword || "", // Keyword default dari props
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword }); // Perbarui state keyword
    this.props.keywordChange(keyword); // Perbarui URL search params
  }

  render() {
    // Filter catatan berdasarkan keyword
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar
            keyword={this.state.keyword}
            setKeyword={this.onKeywordChangeHandler}
            />
          <NoteList notes={filteredNotes} />
        </section>
      </main>
    );
  }
}

export default HomePageWrapper;
