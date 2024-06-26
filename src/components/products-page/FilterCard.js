import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { WrapperForSideDrawerFilter } from '@/gurbage/admin/components/filter/SideDrawerFilter.style'
import Toolbar from '@mui/material/Toolbar'
import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import 'simplebar-react/dist/simplebar.min.css'
import { useTranslation } from 'react-i18next'
import CustomGroupCheckbox from '../custom-group-checkboxs/CustomGroupCheckbox'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterbyByDispatch } from '@/redux/slices/searchFilter'

const FilterCard = ({ stateData, setStateData }) => {
    const { t } = useTranslation()
    const { filterData } = useSelector((state) => state.searchFilterStore)
    const [storeData, setStoreData] = useState({ ...filterData })
    const [cuisineState, setCuisineState] = useState([])
    const [isFilterCall, setIsFilterCall] = useState(false)
    const dispatch = useDispatch()
    const handleFilterBy = () => {
        const activeFilters = stateData.filter((item) => item.isActive === true)
        dispatch(setFilterbyByDispatch(activeFilters))
    }
    useEffect(() => {
        if (isFilterCall) {
            handleFilterBy()
        }
    }, [stateData, storeData])

    return (
        <Box>
            <WrapperForSideDrawerFilter smminwith="270px">
                <Stack spacing={3}>
                    <Stack spacing={1}>
                        <Typography variant="h4">{t('Filter By')}</Typography>
                        <Stack direction="row">
                            <CustomGroupCheckbox
                                handleChangeFilter={handleFilterBy}
                                checkboxData={stateData?.slice(1)}
                                stateData={stateData}
                                setStateData={setStateData}
                                setIsFilterCall={setIsFilterCall}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </WrapperForSideDrawerFilter>
        </Box>
    )
}

FilterCard.propTypes = {}

export default FilterCard
