import styles from "./SearchBox.module.css"

type SearchBoxTypes = {
  inputType: string;
  onInputChange: (value: string) => void;
  onBtnClick: () => void;
  placeHolder?: string
}

const SearchBox = ({
  inputType = "text",
  onInputChange,
  onBtnClick,
  placeHolder = "Search here..."
}: SearchBoxTypes) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  }

  return (
    <div className={styles.SearchBox}>
      <input
        type={inputType}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
      <button onClick={onBtnClick}>
        <img src="/search.svg" alt="search" />
      </button>
    </div>
  )
}

export default SearchBox