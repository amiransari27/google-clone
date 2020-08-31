import React from 'react'
import './SearchResult.css'
import { useStateValue } from 'store/StateProvider'
import useGoogleSearch from 'hooks/useGoogleSearch'
import dummyResponse from 'dummyResponse'
import { Link } from 'react-router-dom'
import Search from 'components/Search/Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DetailsIcon from '@material-ui/icons/Details';

function SearchResult() {

    const [{ term }, dispatch] = useStateValue()

    //Live api call
    const { data } = useGoogleSearch(term)

    // Mock APIs
    // const data = dummyResponse

    return (
        <div className="searchResult">
            <div className="searchResult__header">

                <Link to="/">
                    <img
                        className="searchResult__logo"
                        src="/google-logo.svg"
                        alt="" />
                </Link>
                <div className="searchResult__headerBody">
                    <Search hideButtons />

                    <div className="searchResult__options">

                        <div className="searchResult__optionL">
                            <div className="searchResult__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchResult__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchResult__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchResult__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchResult__option">
                                <RoomIcon />
                                <Link to="/map">Map</Link>
                            </div>
                            <div className="searchResult__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>

                        </div>
                        <div className="searchResult__optionR">
                            <div className="searchResult__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchResult__option">
                                <Link to="/todos">Todos</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {
                term && (
                    <div className="searchResult__results">
                        <p className="searchResult__resultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>


                        {
                            data?.items.map(item => (
                                <div
                                    key={item.cacheId || item.displayLink}  
                                    className="searchResult__result">
                                    <a href={item.link} className="searchResult__resultLink">
                                        {
                                            item.pagemap?.cse_image?.length > 0 &&
                                            item.pagemap?.cse_image[0]?.src &&
                                            (
                                                <img
                                                    className="searchResult__resultImage"
                                                    src={item.pagemap?.cse_image[0]?.src}
                                                />
                                            )
                                        }


                                        {item.displayLink} <DetailsIcon className="searchResult__resultLinkIcon" fontSize="small" />
                                    </a>
                                    <a className="searchResult__resultTitle" href={item.link}>
                                        <h2>

                                            {item.title}
                                        </h2>
                                    </a>
                                    <p className="searchResult__resultSnippet">
                                        {item.snippet}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                )
            }


        </div>
    )
}

export default SearchResult
