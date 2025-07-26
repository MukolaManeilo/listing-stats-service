import Router from 'koa-router';
import StatisticsController from '../controllers/statisticsController.js';
import StatisticsService from '../services/statisticsService.js';
import StatisticsRepository from '../repositories/statisticsRepository.js';
import { validateAutoId, validatePagination, validateTopStatistics } from '../middleware/validation.js';

const router = new Router();

const statisticsRepository = new StatisticsRepository();
const statisticsService = new StatisticsService(statisticsRepository);
const statisticsController = new StatisticsController(statisticsService);

router.get('/top',
	validateTopStatistics,
	statisticsController.getTopStatistics.bind(statisticsController)
);

router.get('/',
	validatePagination,
	statisticsController.getAllStatistics.bind(statisticsController)
);

router.get('/:autoId',
	validateAutoId,
	statisticsController.getStatistics.bind(statisticsController)
);

export default router;
