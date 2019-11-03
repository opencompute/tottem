import { Box } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import { colorPlaceholders } from '../../constants/colors'
import { imageShapes, Item } from '../../types'
import CoverImage from '../Cards/CoverImage'
import { ItemMetas } from '../Cards/Metas'
import { ElementAuthor, ElementDescription, ElementTitle } from '../Typography'

interface IItemListProps {
    items: Item[]
}

const ImageBox = styled(Box)`
    width: 160px;
    @media screen and (max-width: 600px) {
        width: 120px;
    }
`
const Pictogram = styled(Box)`
    flex-shrink: 0;
    height: 30px;
    justify-content: center;
    align-content: center;
    width: 30px;
    background-color: #6faa9c;
    border-radius: 50%;
`

const CollectionCard = styled(Box)`
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 812px) {
        box-shadow: none;
        border-radius: 0px;
        border-top: 1px #dddddd solid;
        border-bottom: 1px #dddddd solid;
    }
`

const ContentBox = styled(Box)`
    margin: 40px 0px 40px 0px;
    padding: 0px 48px 0px 48px;
    width: 100%;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const ItemList: React.FunctionComponent<IItemListProps> = props => {
    return (
        <ContentBox>
            <CollectionCard background="white" pad="large">
                {props.items.map(item => {
                    const picto = `/pictograms/${item.type}-white.svg`
                    return (
                        <Box
                            responsive={false}
                            key={item.title}
                            direction="row"
                            margin={{ bottom: 'large' }}
                        >
                            <Box
                                direction="row"
                                margin={{ bottom: 'small' }}
                                width="100%"
                                justify="between"
                            >
                                <Box direction="row">
                                    <a
                                        href={item.productUrl}
                                        target="_blank"
                                        style={{ display: 'flex ' }}
                                    >
                                        <ImageBox>
                                            <CoverImage
                                                placeholderColor={
                                                    colorPlaceholders[item.type]
                                                }
                                                placeholderPicto={picto}
                                                imageUrl={item.imageUrl}
                                                imageShape={
                                                    imageShapes[item.type]
                                                }
                                            />
                                        </ImageBox>
                                    </a>
                                    <Box margin={{ horizontal: 'large' }}>
                                        <ElementTitle
                                            href={item.productUrl}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </ElementTitle>
                                        <ElementAuthor>
                                            {item.author}
                                        </ElementAuthor>
                                        <Box style={{ marginTop: '8px' }}>
                                            <ItemMetas item={item} />
                                        </Box>
                                        <Box style={{ marginTop: '8px' }}>
                                            <ElementDescription>
                                                {item.description}{' '}
                                            </ElementDescription>
                                        </Box>
                                    </Box>
                                </Box>
                                <Pictogram>
                                    <img
                                        src={`/pictograms/${item.type}-white.svg`}
                                        height="16px"
                                    />
                                </Pictogram>
                            </Box>
                        </Box>
                    )
                })}
            </CollectionCard>
        </ContentBox>
    )
}

export default ItemList
